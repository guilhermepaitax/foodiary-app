import { StyleSheet } from 'react-native';

import { theme } from '@ui/styles/theme';
import { createVariants, VariantProps } from '@ui/styles/utils/create-variants';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export const buttonVariants = createVariants({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.lime[500],
      },
      secondary: {
        backgroundColor: theme.colors.gray[300],
      },
    },
    size: {
      default: {
        paddingVertical: 14,
        paddingHorizontal: 24,
      },
      icon: {
        width: 48,
        height: 48,
      },
    },
    disabled: {
      true: {
        opacity: 0.7,
      },
      false: {
        opacity: 1,
      },
    },
  },
  defaultVariant: {
    size: 'default',
    variant: 'primary',
    disabled: 'false',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
