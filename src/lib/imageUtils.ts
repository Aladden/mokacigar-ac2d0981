// Image utility functions for consistent asset management

/**
 * Generate cigar image path based on brand and cigar name
 */
export const getCigarImagePath = (brandId: string, cigarName: string): string => {
  const slug = cigarName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  return `/images/cigars/${slug}.jpg`;
};

/**
 * Generate brand logo path based on brand ID
 */
export const getBrandLogoPath = (brandId: string): string => {
  return `/images/brands/${brandId}-logo.png`;
};

/**
 * Generate placeholder image path
 */
export const getPlaceholderImage = (type: 'cigar' | 'brand' = 'cigar'): string => {
  return `/api/placeholder/300/300`;
};

/**
 * Check if image exists (for fallback handling)
 */
export const getImageWithFallback = (imagePath: string, fallbackPath?: string): string => {
  // In a real implementation, you might want to check if the image exists
  // For now, we'll return the primary path
  return imagePath || fallbackPath || getPlaceholderImage();
};