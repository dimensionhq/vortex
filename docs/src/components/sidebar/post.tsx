import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import NavLink, { NavLinkProps } from '../nav-link';
import withDefaults from '@utils/with-defaults';
import { Badge } from '@components';
import { useTheme, NextUIThemes, Spacer } from '@nextui-org/react';

export interface Props {
  level: number;
  route: NavLinkProps;
  isMobile: boolean;
  onClick?: () => void;
}

const defaultProps = {
  level: 1,
  isMobile: false,
};

type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;

export type PostProps = Props & typeof defaultProps & NativeAttrs;

const Post: React.FC<React.PropsWithChildren<PostProps>> = ({
  isMobile,
  route,
  level = 1,
  onClick,
}) => {
  const selectedRef = useRef<HTMLDivElement>(null);
  const ref = route.selected ? selectedRef : null;
  const theme = useTheme() as NextUIThemes;

  useEffect(() => {
    if (ref && ref.current && !isMobile) {
      const content = document.querySelector(
        '.sidebar-content'
      ) as HTMLDivElement;
      // 32 is the top and bottom margin for `.link`
      const height = ref.current.offsetTop - 32;

      if (content) {
        content.scrollTop = height - content.offsetHeight / 2;
      }
    }
  }, [ref, isMobile]);

  return (
    <div ref={ref} className={cn('link', `level-${level}`)}>
      <NavLink
        {...route}
        color={!route.selected && theme.palette.accents_5}
        onClick={onClick}
      />
      <Spacer inline x={0.2} />
      {route?.newPost && (
        <Badge className="post__new-badge" label="New" type="primary" />
      )}
      <style jsx>{`
        .link {
          margin: 18px 0;
          display: flex;
          align-items: center;
          min-height: 24px;
        }
        .link::before {
          content: '';
          flex-basis: 4px;
          flex-shrink: 0;
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${theme.palette.accents_6};
          margin-right: 16px;
        }
        .link:first-child {
          margin-top: 0;
        }
        .link:last-child {
          margin-bottom: 0;
        }
        @media screen and (max-width: 950px) {
          .link {
            margin: 24px 0;
          }
        }
      `}</style>
    </div>
  );
};

const MemoPost = React.memo(Post);

export default withDefaults(MemoPost, defaultProps);
