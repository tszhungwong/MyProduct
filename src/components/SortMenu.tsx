import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { InteractivePressable } from '@/components/InteractivePressable';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { SortOption, sortLabels } from '@/features/products/sortTypes';

type SortMenuProps = {
  open: boolean;
  value: SortOption;
  onOpenChange: (next: boolean) => void;
  onSelect: (option: SortOption) => void;
};

const sortOptions: SortOption[] = [
  'default',
  'price-desc',
  'price-asc',
  'sales-desc',
  'sales-asc',
  'related-desc',
  'related-asc',
];

export function SortMenu({ open, value, onOpenChange, onSelect }: SortMenuProps) {
  return (
    <View style={styles.wrap}>
      <InteractivePressable
        accessibilityRole="button"
        hoverScale={1.04}
        onPress={() => onOpenChange(!open)}
        style={[styles.button, open && styles.buttonOpen]}
      >
        <Ionicons color={colors.ink} name="swap-vertical" size={18} />
        <Text style={styles.buttonText}>Sort</Text>
        <Ionicons color={colors.muted} name={open ? 'chevron-up' : 'chevron-down'} size={16} />
      </InteractivePressable>

      {open ? (
        <View style={styles.menu}>
          {sortOptions.map((option) => {
            const active = option === value;
            return (
              <InteractivePressable
                key={option}
                hoverScale={1.01}
                onPress={() => onSelect(option)}
                style={[styles.item, active && styles.itemActive]}
              >
                <Text style={[styles.itemText, active && styles.itemTextActive]}>
                  {sortLabels[option]}
                </Text>
              </InteractivePressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'flex-start',
    position: 'relative',
    zIndex: 5000,
    elevation: 5000,
  },
  button: {
    minHeight: 40,
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
  },
  buttonOpen: {
    borderColor: colors.brand,
  },
  buttonText: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '800',
  },
  menu: {
    position: 'absolute',
    top: 46,
    right: 0,
    width: 220,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 60,
    zIndex: 5001,
  },
  item: {
    minHeight: 42,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  itemActive: {
    backgroundColor: colors.successSoft,
  },
  itemText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
  },
  itemTextActive: {
    color: colors.brandDark,
  },
});
