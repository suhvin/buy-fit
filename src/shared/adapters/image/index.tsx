import NextImage from 'next/image';
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from 'react';

type ImageProps = {
  src: ComponentPropsWithoutRef<typeof NextImage>['src'];
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  quality?: number;
  placeholder?: 'empty' | 'blur';
  layout?: string;
  unoptimized?: boolean;
} & Omit<ComponentPropsWithoutRef<'img'>, 'src'>;

export const Image = forwardRef(function Image(props: ImageProps, ref: Ref<HTMLImageElement>) {
  const { src, alt, width, height, priority, fill, quality, placeholder, layout, unoptimized, ...attributes } = props;
  return (
    <NextImage
      src={src}
      alt={alt ?? ''}
      width={width ?? 10}
      height={height ?? 10}
      priority={priority}
      layout={layout}
      fill={fill}
      quality={quality}
      placeholder={placeholder ?? 'empty'}
      ref={ref}
      unoptimized={unoptimized}
      {...attributes}
    />
  );
});
