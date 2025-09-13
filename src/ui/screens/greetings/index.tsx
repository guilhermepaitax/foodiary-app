import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@ui/components/app-text';
import { Button } from '@ui/components/button';
import { Logo } from '@ui/components/logo';
import { styles } from '@ui/screens/greetings/styles';
import { theme } from '@ui/styles/theme';

import greetingsBg from '@ui/assets/greeetings-bg/image.jpg';

export function Greetings() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={greetingsBg}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <Logo />

        <View style={styles.ctaContainer}>
          <AppText
            size="3xl"
            weight="semiBold"
            style={styles.heading}
            color={theme.colors.white}
          >
            Controle sua dieta de forma simples
          </AppText>

          <View style={styles.ctaContent}>
            <Button>
              Criar Conta
            </Button>

            <View style={styles.signInContainer}>
              <AppText color={theme.colors.white}>
                Já tem uma conta?
              </AppText>
              <TouchableOpacity>
                <AppText color={theme.colors.lime[500]} weight="medium">
                  Acesse sua conta
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
