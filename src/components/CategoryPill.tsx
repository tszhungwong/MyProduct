import { StyleSheet, Text } from 'react-native';

import { InteractivePressable } from '@/components/InteractivePressable';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type CategoryPillProps = {
  label: string;
  onPress?: () => void;
  selected?: boolean;
};

export function CategoryPill({ label, onPress, selected = false }: CategoryPillProps) {
  return (
    <InteractivePressable onPress={onPress} style={[styles.pill, selected && styles.selected]}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </InteractivePressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    minHeight: 36,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 18,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
  },
  selected: {
    borderColor: colors.brand,
    backgroundColor: colors.brand,
  },
  label: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '700',
  },
  selectedLabel: {
    color: colors.surface,
  },
});
