import React from 'react';
import {
  useTheme,
  Text,
  Button,
  Grid,
  Row,
  NextUIThemes,
} from '@nextui-org/react';

const DeleteUser: React.FC = () => {
  const theme = useTheme() as NextUIThemes;

  return (
    <Grid.Container className="delete-user__container">
      <Row justify="center" align="center">
        <Text b>Confirm</Text>
      </Row>
      <Row>
        <Text>
          Are you sure you want to delete this user ?, by doing this, you will
          not be able to recover the data.
        </Text>
      </Row>
      <Grid.Container justify="space-between" alignContent="center">
        <Grid>
          <Button size="small" color="foreground" light>
            Cancel
          </Button>
        </Grid>
        <Grid>
          <Button size="small" shadow color="error">
            Delete
          </Button>
        </Grid>
      </Grid.Container>
      <style jsx>
        {`
          :global(.delete-user__container) {
            max-width: 330px;
            border-radius: ${theme.layout.radius};
            padding: ${theme.layout.gapHalf};
          }
        `}
      </style>
    </Grid.Container>
  );
};

const MemoDeleteUser: React.FC = React.memo(DeleteUser);

export default MemoDeleteUser;
