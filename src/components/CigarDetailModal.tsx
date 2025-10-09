// Luxury Cigar Detail Modal Component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ProcessedCigar } from '@/types/mokaCigar';
import { ImageWithCredit } from './ImageWithCredit';
import { Badge } from './ui/badge';
import { Award, Calendar, Clock, Ruler } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

interface CigarDetailModalProps {
  cigar: ProcessedCigar | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CigarDetailModal({ cigar, open, onOpenChange }: CigarDetailModalProps) {
  if (!cigar) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-b from-card to-background border-primary/30">
        <ScrollArea className="max-h-[85vh] pr-4">
          <DialogHeader className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <DialogTitle className="font-heading text-3xl text-primary mb-2">
                  {cigar.name}
                </DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground">
                  {cigar.brand}
                </DialogDescription>
              </div>
              {cigar.status && (
                <Badge variant={cigar.status === 'Current' ? 'default' : 'secondary'}>
                  {cigar.status}
                </Badge>
              )}
            </div>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <ImageWithCredit
                brandName={cigar.brand}
                cigarName={cigar.name}
                alt={cigar.name}
                className="w-full h-96 object-contain rounded-lg bg-black/20"
                showCredit={true}
              />

              {/* Factory & Vitola Info */}
              <div className="space-y-2">
                {cigar.factoryName && (
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Factory:</span>
                    <span className="text-primary">{cigar.factoryName}</span>
                  </div>
                )}
                {cigar.vitola && (
                  <div className="flex items-center gap-2 text-sm">
                    <Ruler className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Vitola:</span>
                    <span className="text-primary">{cigar.vitola}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Specifications */}
              <div>
                <h3 className="font-heading text-xl text-primary mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {cigar.lengthMm && (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Length</p>
                      <p className="text-primary font-medium">
                        {cigar.lengthInches}" ({cigar.lengthMm}mm)
                      </p>
                    </div>
                  )}
                  {cigar.ringGauge && (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Ring Gauge</p>
                      <p className="text-primary font-medium">{cigar.ringGauge}</p>
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Intensity</p>
                    <p className="text-primary font-medium">{cigar.intensity}</p>
                  </div>
                  {cigar.enjoymentTime && (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Smoking Time</p>
                      <p className="text-primary font-medium">{cigar.enjoymentTime}</p>
                    </div>
                  )}
                  {cigar.construction && (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Construction</p>
                      <p className="text-primary font-medium">{cigar.construction}</p>
                    </div>
                  )}
                  {cigar.releaseYear && (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Release Year</p>
                      <p className="text-primary font-medium">{cigar.releaseYear}</p>
                    </div>
                  )}
                </div>
              </div>

              <Separator className="bg-primary/20" />

              {/* Description */}
              <div>
                <h3 className="font-heading text-xl text-primary mb-3">About</h3>
                <p className="text-foreground/80 leading-relaxed">{cigar.description}</p>
              </div>

              {/* Tasting Notes */}
              {cigar.taste && (
                <>
                  <Separator className="bg-primary/20" />
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-3">Tasting Notes</h3>
                    <p className="text-foreground/80 leading-relaxed">{cigar.taste}</p>
                  </div>
                </>
              )}

              {/* Notes */}
              {cigar.notes && (
                <>
                  <Separator className="bg-primary/20" />
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-semibold text-primary mb-2">Special Notes</h4>
                    <p className="text-sm text-foreground/80">{cigar.notes}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
