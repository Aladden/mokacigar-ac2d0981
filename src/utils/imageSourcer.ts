// Image sourcing utility with fallback cascade
// Priority: GitHub repo -> mokacigar.com -> cubancigarwebsite.com -> habanos.com -> placeholder

const GITHUB_BASE = 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images';
const GITHUB_BRANDS_BASE = 'https://raw.githubusercontent.com/Aladden/mokacigar-ac2d0981/main/public/images/brands';

export interface ImageSource {
  url: string;
  credit?: string;
  source: 'github' | 'mokacigar' | 'cubancigarwebsite' | 'habanos' | 'placeholder';
}

/**
 * Generate cigar image with fallback cascade
 */
export function getCigarImage(brandName: string, cigarName: string): ImageSource {
  const slug = cigarName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const brandSlug = brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  // Try GitHub first
  return {
    url: `${GITHUB_BASE}/cigars/${brandSlug}-${slug}.jpg`,
    source: 'github'
  };
}

/**
 * Generate brand logo with fallback cascade
 */
export function getBrandLogo(brandName: string): ImageSource {
  const slug = brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  // Try GitHub brands folder first
  return {
    url: `${GITHUB_BRANDS_BASE}/${slug}.png`,
    source: 'github'
  };
}

/**
 * Get fallback URLs for an image
 */
export function getImageFallbacks(brandName: string, cigarName?: string): ImageSource[] {
  const brandSlug = brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  if (cigarName) {
    const cigarSlug = cigarName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return [
      {
        url: `${GITHUB_BASE}/cigars/${brandSlug}-${cigarSlug}.jpg`,
        source: 'github'
      },
      {
        url: `${GITHUB_BASE}/cigars/${cigarSlug}.jpg`,
        source: 'github'
      },
      {
        url: `https://www.mokacigar.com/images/cigars/${brandSlug}/${cigarSlug}.jpg`,
        credit: 'Image courtesy of MokaCigar.com',
        source: 'mokacigar'
      },
      {
        url: `https://www.cubancigarwebsite.com/images/${brandSlug}/${cigarSlug}.jpg`,
        credit: 'Image courtesy of CubanCigarWebsite.com',
        source: 'cubancigarwebsite'
      },
      {
        url: '/placeholder.svg',
        credit: 'Image unavailable',
        source: 'placeholder'
      }
    ];
  }
  
  // Brand logo fallbacks
  return [
    {
      url: `${GITHUB_BASE}/brands/${brandSlug}-logo.png`,
      source: 'github'
    },
    {
      url: `https://www.mokacigar.com/images/brands/${brandSlug}-logo.png`,
      credit: 'Logo courtesy of MokaCigar.com',
      source: 'mokacigar'
    },
    {
      url: '/placeholder.svg',
      credit: 'Logo unavailable',
      source: 'placeholder'
    }
  ];
}

/**
 * Component to display image credit
 */
export function getImageCredit(source: ImageSource['source']): string {
  switch (source) {
    case 'mokacigar':
      return 'Image courtesy of MokaCigar.com';
    case 'cubancigarwebsite':
      return 'Image courtesy of CubanCigarWebsite.com';
    case 'habanos':
      return 'Image courtesy of Habanos.com';
    case 'placeholder':
      return 'Image unavailable';
    default:
      return '';
  }
}
