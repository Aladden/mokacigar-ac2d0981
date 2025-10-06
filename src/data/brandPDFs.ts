// Brand PDF mappings

export const brandPDFs: Record<string, string> = {
  "bolivar": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/bolivar-information.pdf",
  "cohiba": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/cohiba-information.pdf",
  "cuaba": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/cuaba-information.pdf",
  "diplomaticos": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/diplomaticos-information.pdf",
  "el-rey-del-mundo": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/el-rey-del-mundo-information.pdf",
  "fonseca": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/fonseca-information.pdf",
  "h-upmann": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/h-upmann-information.pdf",
  "hoyo-de-monterrey": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/hoyo-de-monterrey-information.pdf",
  "jose-l-piedra": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/jose-l-piedra-information.pdf",
  "juan-lopez": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/juan-lopez-information.pdf",
  "la-flor-de-cano": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/la-flor-de-cano-information.pdf",
  "la-gloria-cubana": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/la-gloria-cubana-information.pdf",
  "montecristo": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/montecristo-information.pdf",
  "punch": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/punch-information.pdf",
  "quai-dorsay": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/quai-dorsay-information.pdf",
  "quintero": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/quintero-information.pdf",
  "rafael-gonzalez": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/rafael-gonzalez-information.pdf",
  "ramon-allones": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/ramon-allones-information.pdf",
  "romeo-y-julieta": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/romeo-y-julieta-information.pdf",
  "saint-luis-rey": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/saint-luis-rey-information.pdf",
  "sancho-panza": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/sancho-panza-information.pdf",
  "trinidad": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/trinidad-information.pdf",
  "vegas-robaina": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/vegas-robaina-information.pdf",
  "vegueros": "https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/brand-pdfs/vegueros-information.pdf"
};

export function getBrandPDF(brandName: string): string | undefined {
  const slug = brandName.toLowerCase().replace(/\s+/g, '-');
  return brandPDFs[slug];
}
