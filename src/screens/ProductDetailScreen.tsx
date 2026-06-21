import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { InteractivePressable } from '@/components/InteractivePressable';
import { getProductById } from '@/features/products/productQueries';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

type ProductDetailScreenProps = {
  productId?: string;
};

export function ProductDetailScreen({ productId }: ProductDetailScreenProps) {
  const router = useRouter();
  const product = productId ? getProductById(productId) : undefined;

  const handleBackPress = () => {};
  const handleAddToCartPress = () => {};

  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Product not found</Text>
          <InteractivePressable
            hoverScale={1.04}
            onPress={() => {
              handleBackPress();
              router.back();
            }}
            style={styles.secondaryButton}
          >
            <Ionicons color={colors.ink} name="arrow-back" size={18} />
            <Text style={styles.secondaryButtonText}>Back</Text>
          </InteractivePressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ImageBackground
          imageStyle={styles.heroImage}
          source={{ uri: product.imageUrl }}
          style={styles.hero}
        >
          <View style={styles.heroShade}>
            <InteractivePressable
              accessibilityLabel="Go back"
              hoverScale={1.08}
              onPress={() => {
                handleBackPress();
                router.back();
              }}
              style={styles.backButton}
            >
              <Ionicons color={colors.ink} name="arrow-back" size={20} />
            </InteractivePressable>
            {product.badge ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{product.badge}</Text>
              </View>
            ) : null}
          </View>
        </ImageBackground>

        <View style={styles.detailHeader}>
          <View style={styles.titleWrap}>
            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.title}>{product.name}</Text>
          </View>
          <Text style={styles.price}>
            ${product.price.toFixed(2)}
            <Text style={styles.unit}> / {product.unit}</Text>
          </Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.metrics}>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>{product.stock}</Text>
            <Text style={styles.metricLabel}>In stock</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>{product.sales}</Text>
            <Text style={styles.metricLabel}>Sales</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>{product.relatedScore}</Text>
            <Text style={styles.metricLabel}>Match</Text>
          </View>
        </View>

        <InteractivePressable
          hoverScale={1.02}
          onPress={handleAddToCartPress}
          style={styles.primaryButton}
        >
          <Ionicons color={colors.surface} name="add" size={22} />
          <Text style={styles.primaryButtonText}>Add to cart</Text>
        </InteractivePressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    gap: spacing.xl,
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  hero: {
    minHeight: 320,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: colors.successSoft,
  },
  heroImage: {
    borderRadius: 8,
  },
  heroShade: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 22,
    backgroundColor: colors.surface,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.accentSoft,
  },
  badgeText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
  },
  detailHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.lg,
    justifyContent: 'space-between',
  },
  titleWrap: {
    flex: 1,
    gap: spacing.xs,
  },
  category: {
    color: colors.brand,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 36,
  },
  price: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'right',
  },
  unit: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
  },
  metrics: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  metric: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    padding: spacing.lg,
    backgroundColor: colors.surface,
  },
  metricValue: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '900',
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  primaryButton: {
    minHeight: 54,
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.brand,
  },
  primaryButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '900',
  },
  secondaryButton: {
    minHeight: 44,
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
  },
  secondaryButtonText: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '900',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.lg,
    padding: spacing.lg,
  },
  emptyTitle: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '900',
  },
});
