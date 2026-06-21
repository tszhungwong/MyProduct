import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { InteractivePressable } from '@/components/InteractivePressable';
import { CartItem } from '@/features/cart/cartTypes';
import { getCartSubtotal, preservedCartItems } from '@/features/cart/mockCart';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function CartScreen() {
  const router = useRouter();
  const subtotal = getCartSubtotal(preservedCartItems);

  const handleBackPress = () => {};
  const handlePayPress = () => {};
  const handleQuantityDecrease = (item: CartItem) => {
    void item;
  };
  const handleQuantityIncrease = (item: CartItem) => {
    void item;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.shell}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <InteractivePressable
              accessibilityLabel="Go back"
              hoverScale={1.08}
              onPress={() => {
                handleBackPress();
                router.back();
              }}
              style={styles.iconButton}
            >
              <Ionicons color={colors.ink} name="arrow-back" size={20} />
            </InteractivePressable>
            <View style={styles.titleWrap}>
              <Text style={styles.kicker}>Shopping cart</Text>
              <Text style={styles.title}>Preserved shopping list</Text>
            </View>
          </View>

          <View style={styles.list}>
            {preservedCartItems.map((item) => (
              <View key={item.id} style={styles.item}>
                <Image source={{ uri: item.product.imageUrl }} style={styles.itemImage} />
                <View style={styles.itemBody}>
                  <Text numberOfLines={1} style={styles.itemName}>
                    {item.product.name}
                  </Text>
                  <Text style={styles.itemMeta}>
                    ${item.product.price.toFixed(2)} / {item.product.unit}
                  </Text>
                  <View style={styles.quantityRow}>
                    <InteractivePressable
                      accessibilityLabel={`Decrease ${item.product.name}`}
                      hoverScale={1.08}
                      onPress={() => handleQuantityDecrease(item)}
                      style={styles.quantityButton}
                    >
                      <Ionicons color={colors.ink} name="remove" size={16} />
                    </InteractivePressable>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <InteractivePressable
                      accessibilityLabel={`Increase ${item.product.name}`}
                      hoverScale={1.08}
                      onPress={() => handleQuantityIncrease(item)}
                      style={styles.quantityButton}
                    >
                      <Ionicons color={colors.ink} name="add" size={16} />
                    </InteractivePressable>
                  </View>
                </View>
                <Text style={styles.itemTotal}>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.checkoutBar}>
          <View>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <InteractivePressable hoverScale={1.03} onPress={handlePayPress} style={styles.payButton}>
            <Ionicons color={colors.surface} name="card-outline" size={20} />
            <Text style={styles.payButtonText}>Pay</Text>
          </InteractivePressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  shell: {
    flex: 1,
  },
  content: {
    gap: spacing.xl,
    padding: spacing.lg,
    paddingBottom: 112,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.lg,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 22,
    backgroundColor: colors.surface,
  },
  titleWrap: {
    flex: 1,
    minWidth: 0,
  },
  kicker: {
    color: colors.brand,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    flexShrink: 1,
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 36,
  },
  list: {
    gap: spacing.md,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    padding: spacing.md,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  itemImage: {
    width: 86,
    height: 86,
    borderRadius: 8,
    backgroundColor: colors.successSoft,
  },
  itemBody: {
    flex: 1,
    minWidth: 0,
    gap: spacing.sm,
  },
  itemName: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '900',
  },
  itemMeta: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  quantityRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 15,
    backgroundColor: colors.background,
  },
  quantity: {
    minWidth: 20,
    color: colors.ink,
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },
  itemTotal: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '900',
  },
  checkoutBar: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.lg,
    left: spacing.lg,
    minHeight: 78,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 8,
  },
  totalLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  totalValue: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '900',
  },
  payButton: {
    minHeight: 46,
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.brand,
  },
  payButtonText: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: '900',
  },
});
