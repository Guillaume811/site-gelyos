type StaticImageDataLike = {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

declare module '*.webp' {
  const data: StaticImageDataLike;
  export default data;
}

declare module '*.png' {
  const data: StaticImageDataLike;
  export default data;
}

declare module '*.jpg' {
  const data: StaticImageDataLike;
  export default data;
}

declare module '*.jpeg' {
  const data: StaticImageDataLike;
  export default data;
}

declare module '*.avif' {
  const data: StaticImageDataLike;
  export default data;
}
