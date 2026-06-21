import { GestureResponderEvent, Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { InteractivePressable } from '@/components/InteractivePressable';
import { Product } from '@/features/products/productTypes';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type ProductCardProps = {
  onAddPress?: (product: Product) => void;
  onPress?: (product: Product) => void;
  product: Product;
};

export function ProductCard({ onAddPress, onPress, product }: ProductCardProps) {
  const handleAddPress = (event: GestureResponderEvent) => {
    event.stopPropagation();
    onAddPress?.(product);
  };

  return (
    <InteractivePressable onPress={() => onPress?.(product)} style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        {product.badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{product.badge}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.body}>
        <Text numberOfLines={2} style={styles.name}>
          {product.name}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {product.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>
            ${product.price.toFixed(2)}
            <Text style={styles.unit}> / {product.unit}</Text>
          </Text>
          <InteractivePressable
            accessibilityLabel={`Add ${product.name} to cart`}
            hoverScale={1.08}
            onPress={handleAddPress}
            style={styles.addButton}
          >
            <Ionicons color={colors.surface} name="add" size={20} />
          </InteractivePressable>
        </View>
      </View>
    </InteractivePressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 276,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  imageWrap: {
    height: 126,
    backgroundColor: colors.successSoft,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.accentSoft,
  },
  badgeText: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '800',
  },
  body: {
    flex: 1,
    gap: spacing.sm,
    padding: spacing.md,
  },
  name: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '800',
  },
  description: {
    color: colors.muted,
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  price: {
    color: colors.ink,
    flex: 1,
    fontSize: 15,
    fontWeight: '900',
  },
  unit: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '600',
  },
  addButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: colors.brand,
  },
});
