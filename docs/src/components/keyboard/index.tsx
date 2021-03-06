import React, { useMemo } from 'react';
import withDefaults from '@utils/with-defaults';
import { useTheme, NextUIThemes } from '@nextui-org/react';
import { addColorAlpha } from '@utils/index';
import useDarkMode from 'use-dark-mode';

interface Props {
  command?: boolean;
  shift?: boolean;
  option?: boolean;
  ctrl?: boolean;
  small?: boolean;
  onClick?: () => void;
  className?: string;
}

const defaultProps = {
  command: false,
  shift: false,
  option: false,
  ctrl: false,
  small: false,
  className: ''
};

type NativeAttrs = Omit<React.KeygenHTMLAttributes<unknown>, keyof Props>;
export type KeyboardProps = Props & typeof defaultProps & NativeAttrs;

type CustomLayout = {
  padding: number | string;
  fontSize: string;
  minWidth: string;
};

const getLayout = (small: boolean, theme: NextUIThemes): CustomLayout => {
  if (small)
    return {
      padding: 0,
      fontSize: '.75rem',
      minWidth: theme.layout.gap
    };
  return {
    padding: theme.layout.gapQuarter,
    fontSize: '0.875rem',
    minWidth: `calc(1.5 * ${theme.layout.gap})`
  };
};

const Keyboard: React.FC<React.PropsWithChildren<KeyboardProps>> = ({
  command,
  shift,
  option,
  ctrl,
  small,
  children,
  className,
  onClick,
  ...props
}) => {
  const theme = useTheme();
  const isDark = useDarkMode().value;
  const { padding, fontSize, minWidth } = useMemo<CustomLayout>(
    () => getLayout(small, theme),
    [small, theme]
  );

  return (
    <kbd className={className} onClick={onClick} {...props}>
      {command && <span>⌘</span>}
      {shift && <span>⇧</span>}
      {option && <span>⌥</span>}
      {ctrl && <span>⌃</span>}
      {children && <span>{children}</span>}
      <style jsx>{`
        kbd {
          width: fit-content;
          line-height: 2em;
          text-align: center;
          display: inline-block;
          cursor: ${onClick ? 'pointer' : 'default'};
          color: ${addColorAlpha(theme.palette.text, 0.6)};
          background-color: ${addColorAlpha(theme.palette.background, 0.8)};
          border: ${isDark
            ? `1px solid ${addColorAlpha(theme.palette.foreground, 0.2)}`
            : 'none'};
          box-shadow: ${isDark ? 'none' : '0 0 2px 0 rgb(0 0 0 / 14%)'};
          font-family: ${theme.font.sans};
          border-radius: 6px;
          padding: 0 ${padding};
          min-width: ${minWidth};
          font-size: ${fontSize};
        }
        kbd + kbd {
          margin-left: ${theme.layout.gapQuarter};
        }
        span {
          line-height: 2em;
          font-size: 0.875rem;
          text-align: center;
        }
        span + span {
          margin-left: ${theme.layout.gapQuarter};
        }
      `}</style>
    </kbd>
  );
};

const MemoKeyboard = React.memo(Keyboard);

export default withDefaults(MemoKeyboard, defaultProps);
