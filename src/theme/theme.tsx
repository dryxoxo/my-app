/**
 * Represents the light theme colors.
 */
const LightTheme = {
    background: '#FFFFFF',  // Background cerah untuk Light Mode, putih memberikan kesan terang dan bersih
    text: {
        primary: '#000000',  // Teks utama berwarna gelap (hitam) untuk kontras tinggi dengan latar belakang putih
        secondary: '#4F4F4F',  // Teks sekunder menggunakan warna abu-abu gelap untuk informasi non-utama
        tertiary: '#757575',  // Teks lebih ringan, cocok untuk label atau teks deskripsi yang tidak terlalu penting
        muted: '#BDBDBD',  // Teks yang lebih pudar, digunakan untuk elemen teks yang kurang menonjol atau tidak utama
        highlight: '#EF2D1A',  // Warna teks yang menonjol untuk highlight (misalnya untuk kesalahan atau peringatan)
    },
};

/**
 * Represents the type for the theme object.
 */
export type ITheme = typeof LightTheme;

/**
 * Dark theme object.
 */
const DarkTheme: ITheme = {
    background: '#15141F',  // Background gelap untuk Dark Mode, memberi kesan elegan dan nyaman di mata dalam kondisi pencahayaan rendah
    text: {
        primary: '#FFFFFF',  // Teks utama berwarna terang (putih) untuk kontras tinggi dengan latar belakang gelap
        secondary: '#BCBCBC',  // Teks sekunder lebih terang dari primary, memberikan variasi namun tetap mudah dibaca
        tertiary: '#E0E0E0',  // Teks lebih ringan untuk informasi tambahan atau teks yang tidak terlalu penting
        muted: '#BBBBBB',  // Teks yang lebih pudar untuk elemen yang kurang penting atau yang tidak perlu mendapatkan perhatian besar
        highlight: '#EF2D1A',  // Highlight yang sama dengan LightTheme, memberi penekanan pada teks penting atau kesalahan
    },
};

export { LightTheme, DarkTheme };
