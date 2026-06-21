import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { CategoryPill } from '@/components/CategoryPill';
import { InteractivePressable } from '@/components/InteractivePressable';
import { ProductCard } from '@/components/ProductCard';
import { SortMenu } from '@/components/SortMenu';
import { categories, featuredProduct, products } from '@/features/products/mockProducts';
import { Product, ProductCategory } from '@/features/products/productTypes';
import { SortOption, sortLabels } from '@/features/products/sortTypes';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function HomeScreen() {
  const router = useRouter();
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const sortedProducts = useMemo(() => {
    const items = [...products];
    if (sortBy === 'default') {
      return items;
    }

    const direction = sortBy.endsWith('desc') ? -1 : 1;

    return items.sort((a, b) => {
      if (sortBy.startsWith('price')) {
        return (a.price - b.price) * direction;
      }
      if (sortBy.startsWith('sales')) {
        return (a.sales - b.sales) * direction;
      }
      return (a.relatedScore - b.relatedScore) * direction;
    });
  }, [sortBy]);

  const handleCartPress = () => {
    router.push('/cart' as never);
  };

  const handleCategoryPress = (category: ProductCategory) => {
    void category;
  };

  const handleSortSelect = (option: SortOption) => {
    setSortBy(option);
  };

  const handleProductPress = (product: Product) => {
    router.push(`/products/${product.id}` as never);
  };

  const handleAddToCartPress = (product: Product) => {
    void product;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        onScrollBeginDrag={() => setSortOpen(false)}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.titleWrap}>
            <Text style={styles.kicker}>Local shop</Text>
            <Text style={styles.title}>Good goods, ready today</Text>
          </View>
          <InteractivePressable hoverScale={1.08} onPress={handleCartPress} style={styles.cartButton}>
            <Ionicons color={colors.ink} name="bag-outline" size={22} />
          </InteractivePressable>
        </View>

        <View style={styles.searchBox}>
          <Ionicons color={colors.muted} name="search" size={20} />
          <TextInput
            placeholder="Search products"
            placeholderTextColor={colors.muted}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.categoryToolbar}>
          <ScrollView
            contentContainerStyle={styles.categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroller}
          >
            {categories.map((category) => (
              <CategoryPill
                key={category}
                label={category}
                onPress={() => handleCategoryPress(category)}
                selected={category === 'All'}
              />
            ))}
          </ScrollView>
          <View style={styles.sortGroup}>
            <Text style={styles.sortLabel}>{sortLabels[sortBy]}</Text>
            <SortMenu
              open={sortOpen}
              onOpenChange={setSortOpen}
              onSelect={(option) => {
                handleSortSelect(option);
                setSortOpen(false);
              }}
              value={sortBy}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Popular products</Text>

        <ImageBackground
          imageStyle={styles.featuredImage}
          source={{ uri: featuredProduct.imageUrl }}
          style={styles.featured}
        >
          <View style={styles.featuredShade}>
            <Text style={styles.featuredBadge}>{featuredProduct.badge}</Text>
            <Text style={styles.featuredTitle}>{featuredProduct.name}</Text>
            <Text style={styles.featuredText}>{featuredProduct.description}</Text>
            <Text style={styles.featuredPrice}>${featuredProduct.price.toFixed(2)}</Text>
          </View>
        </ImageBackground>

        <View style={styles.productGrid}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              onAddPress={handleAddToCartPress}
              onPress={handleProductPress}
              product={product}
            />
          ))}
        </View>
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.lg,
  },
  titleWrap: {
    flex: 1,
    minWidth: 0,
  },
  kicker: {
    color: colors.brand,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    flexShrink: 1,
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 36,
  },
  cartButton: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 23,
    backgroundColor: colors.surface,
  },
  searchBox: {
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
  },
  searchInput: {
    flex: 1,
    color: colors.ink,
    fontSize: 16,
  },
  categoryList: {
    gap: spacing.sm,
    paddingRight: spacing.md,
  },
  categoryToolbar: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 4000,
    elevation: 4000,
  },
  categoryScroller: {
    flex: 1,
  },
  sortGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  sortLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'right',
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '800',
  },
  featured: {
    minHeight: 210,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: colors.brandDark,
  },
  featuredImage: {
    borderRadius: 8,
  },
  featuredShade: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: spacing.sm,
    padding: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.34)',
  },
  featuredBadge: {
    alignSelf: 'flex-start',
    overflow: 'hidden',
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    color: colors.brandDark,
    backgroundColor: colors.surface,
    fontSize: 12,
    fontWeight: '900',
  },
  featuredTitle: {
    color: colors.surface,
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 33,
  },
  featuredText: {
    maxWidth: 270,
    color: colors.surface,
    fontSize: 14,
    lineHeight: 20,
  },
  featuredPrice: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: '900',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.lg,
  },
});
