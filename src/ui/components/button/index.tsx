import { Platform, Pressable, View } from 'react-native';

import { AppText } from '@ui/components/app-text';
import { ButtonVariants, buttonVariants, styles } from '@ui/components/button/sytles';

type IButtonProps = React.ComponentProps<typeof Pressable> & Omit<ButtonVariants, 'disabled'> & {
  children: React.ReactNode;
};

export function Button({
  children,
  variant,
  size,
  disabled,
  style,
  ...props
}: IButtonProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
        style={({ pressed }) => [
          buttonVariants({
            size,
            variant,
            disabled: disabled ? 'true' : 'false',
          }),
          pressed && Platform.OS === 'ios' && { opacity: 0.8 },
          typeof style === 'function' ? style({ pressed }) : style,
        ]}
        disabled={disabled}
        {...props}
      >
        {typeof children !== 'string' && children}
        {typeof children === 'string' && <AppText weight="medium">{children}</AppText>}
      </Pressable>
    </View>
  );
}
