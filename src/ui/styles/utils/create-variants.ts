import { type ImageStyle, type TextStyle, type ViewStyle } from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

type Variant = {
  [variant: string]: {
    [variantName: string]: Style;
  };
}

type DefaultVariants<TVariants extends Variant> = {
  [variant in keyof TVariants]: keyof TVariants[variant];
}

type SelectedVariants<TVariants extends Variant> = {
  [variant in keyof TVariants]?: keyof TVariants[variant];
}

interface ICreateVariantsProps<TVariants extends Variant> {
  base?: Style;
  variants: TVariants;
  defaultVariant: DefaultVariants<TVariants>;
}

export function createVariants<TVariants extends Variant>({
  base = {},
  variants,
  defaultVariant,
}: ICreateVariantsProps<TVariants>) {
  return (selectedVariants?: SelectedVariants<TVariants>) => {
    let styles = { ...base };

    for (const [variant, variantsStyles] of Object.entries(variants)) {
      const variantName = selectedVariants?.[variant] ?? defaultVariant[variant];

      const selectedStyles = variantsStyles[variantName as keyof typeof variantsStyles];

      styles = { ...styles, ...selectedStyles };
    }

    return styles;
  };
}

export type VariantProps<T extends ReturnType<typeof createVariants>> = NonNullable<Parameters<T>[0]>;
