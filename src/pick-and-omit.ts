export { };

type DetailedProfiled = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfiled, 'name' | 'weight' | 'height'>;
type SmallProfile = Omit<DetailedProfiled, 'height'>

// Omitの仕組み
type MyOmit<T> = Pick<DetailedProfiled, 'name' | 'weight'>;
type MySmallProfile = MyOmit<DetailedProfiled>;
