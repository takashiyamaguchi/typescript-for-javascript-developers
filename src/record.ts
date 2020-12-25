export { };

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Nagasaki' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1980 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 1249 },
  Nagasaki: { kanji_name: '長崎', confirmed_cases: 12 },
  Shiga: { kanji_name: '長崎', confirmed_cases: true }
};
