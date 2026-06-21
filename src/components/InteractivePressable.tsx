import { ReactNode, useState } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

type InteractivePressableProps = Omit<PressableProps, 'children' | 'style' | 'onPress'> & {
  children: ReactNode;
  hoverScale?: number;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export function InteractivePressable({
  children,
  hoverScale = 1.02,
  onHoverIn,
  onHoverOut,
  onPress,
  style,
  ...props
}: InteractivePressableProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      {...props}
      onHoverIn={(event) => {
        setHovered(true);
        onHoverIn?.(event);
      }}
      onHoverOut={(event) => {
        setHovered(false);
        onHoverOut?.(event);
      }}
      onPress={onPress}
      style={[style, hovered && { transform: [{ scale: hoverScale }] }]}
    >
      {children}
    </Pressable>
  );
}
