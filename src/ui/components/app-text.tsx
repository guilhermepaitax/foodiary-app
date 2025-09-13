import React from 'react';
import { Text } from 'react-native';

import { theme } from '@ui/styles/theme';

interface IAppTextProps extends React.ComponentProps<typeof Text> {
  size?: keyof typeof theme.fontSize;
  family?: keyof typeof theme.fontFamily;
  weight?: keyof (typeof theme.fontFamily)[keyof typeof theme.fontFamily];
  color?: string;
}

export const AppText = ({
  size = 'base',
  family = 'sans',
  weight = 'regular',
  color = theme.colors.black[700],
  style = {},
  ...props
}: IAppTextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: theme.fontFamily[family][weight],
          fontSize: theme.fontSize[size],
          color,
        },
        style,
      ]}
      {...props}
    />
  );
};
