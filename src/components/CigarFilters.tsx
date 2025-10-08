// Filter and Sort Controls for Cigar Collections
import { motion } from 'framer-motion';
import { Filter, ArrowUpDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export type FilterStatus = 'all' | 'current' | 'discontinued';
export type SortOption = 'name' | 'year' | 'ringGauge' | 'length';

interface CigarFiltersProps {
  statusFilter: FilterStatus;
  onStatusChange: (status: FilterStatus) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalCount: number;
  filteredCount: number;
}

export function CigarFilters({
  statusFilter,
  onStatusChange,
  sortBy,
  onSortChange,
  totalCount,
  filteredCount
}: CigarFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Filter Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Filter className="w-4 h-4 text-primary" />
            <span>Status:</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant={statusFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onStatusChange('all')}
              className="transition-all"
            >
              All ({totalCount})
            </Button>
            <Button
              variant={statusFilter === 'current' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onStatusChange('current')}
              className="transition-all"
            >
              Current
            </Button>
            <Button
              variant={statusFilter === 'discontinued' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onStatusChange('discontinued')}
              className="transition-all"
            >
              Discontinued
            </Button>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <ArrowUpDown className="w-4 h-4 text-primary" />
            <span>Sort by:</span>
          </div>
          <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-[180px] glass border-border">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="year">Release Year</SelectItem>
              <SelectItem value="ringGauge">Ring Gauge</SelectItem>
              <SelectItem value="length">Length</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Result Count */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {filteredCount} of {totalCount} cigars
      </div>
    </motion.div>
  );
}
