import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type SectionHeaderProps = {
  title: string;
  action?: string;
};

export function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {action ? <Text style={styles.action}>{action}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '800',
  },
  action: {
    color: colors.brand,
    fontSize: 14,
    fontWeight: '800',
  },
});
