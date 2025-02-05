import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SvgProps } from 'react-native-svg';

interface ButtonProps {
  Icon?: React.ComponentType<SvgProps>;
  text: string;
  variant: 'primary' | 'outline';
  onPress?: () => void;
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({ Icon, text, variant, onPress, isLoading }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        styles.baseButton,
        variant === 'primary' && styles.primaryButton,
        variant === 'outline' && styles.outlineButton,
      ]}
      disabled={isLoading}
    >
      <View style={styles.content}>
        {!isLoading && Icon && <Icon width={18} height={18} />}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={[
              styles.text,
              variant === 'primary' && styles.primaryText,
              variant === 'outline' && styles.outlineText,
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#1D61E7',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#EFF0F6',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#000000',
  },
});
