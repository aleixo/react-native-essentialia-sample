import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import 'react-native-gesture-handler';

import {
  View,
  Text,
  Provider,
  Button,
  useDispatcher,
} from '../../react-native-iso-ui';

declare var global: { HermesInternal: null | {} };

const Scroll = () => {
  const dispatcher = useDispatcher();
  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <View m={20} p={20} shadow>
        <Text h1>TEXT</Text>
      </View>
      <View m={10}>
        <Text h1>H1</Text>
        <Text h3>H2</Text>
        <Text h3>H3</Text>
        <Text h4>H4</Text>
        <Text h5>H5</Text>
        <Text h5>H6</Text>
        <Text h5>MY_COMPONENT.CURR_LANGUAGE</Text>
        <Text paragraph>Paragraph MY_COMPONENT.CURR_LANGUAGE</Text>
        <Text label>Labe</Text>
        <Button
          onPress={() => {
            dispatcher.i18n({ newLanguage: 'EN' });
          }}
          title="Change to english"
        />
        <Button
          langToggle={['EN', 'PT']}
          title="Change to english AUTO"
          onToggle={(value) => {
            return <Text>CUSTOM RENDER {value}</Text>;
          }}
        />
        <Button
          onPress={() => {
            dispatcher.i18n({ newLanguage: 'PT' });
          }}
          title="Change to Portuguese"
        />
        <Button
          onPress={() => {
            dispatcher.theme({ fontScale: 2 });
          }}
          title="Scale font up"
        />
        <Button
          onPress={() => {
            dispatcher.theme({ fontScale: 1 });
          }}
          title="Scale font normal"
        />
        <Button
          onPress={() => {
            dispatcher.theme({ fontScale: 0.5 });
          }}
          title="Scale font down"
        />
        <Button fontScaleToggle={[2, 1, 0.5]} title="Scale font AUTO" />
        <Button
          fontScaleToggle={[2, 1, 0.5]}
          title="Scale toggle custom render"
          onToggle={(value) => <Text>SCALE FONT CUSTOM RENDER {value}</Text>}
        />
        <Button
          onPress={() => {
            dispatcher.theme({ theme: 'light' });
          }}
          title="Theme light (changes text color)"
        />
        <Button onPress={dispatcher.theme} title="Theme default" />
        <Button themeToggle={['light', 'default']} title="Theme toggle AUTO" />
        <Button
          themeToggle={['light', 'default']}
          title="Theme toggle custom render"
          onToggle={(value) => <Text>Custom render theme {value}</Text>}
        />
        <Button modifiers="round" size={100} title="Test modifiers" />
        <Button
          modifiers="round button_red"
          size={100}
          title="Test custom modifiers"
        />
        <Button
          modifiers="button_red bordered"
          size={100}
          title="Test custom modifiers"
        />
      </View>
    </ScrollView>
  );
};

const App: React.FC<{}> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider
        initialLang="PT"
        sizes={{
          XL: 30,
          L: 26,
          M: 22,
          S: 20,
          XS: 18,
          XXS: 16,
          label: 14,
          paragraph: 12,
        }}
        colors={{
          default: {
            text: 'blue',
            border: 'red',
            backgroundColor: 'yellow',
          },
          light: {
            text: 'grey',
            border: 'blue',
          },
        }}
        modifiers={(currentColor) => ({
          button_red: {
            color: 'red',
          },
        })}
        strings={{
          PT: {
            MY_COMPONENT: {
              CURR_LANGUAGE: 'PORTUGUESE',
            },
          },
          EN: {
            MY_COMPONENT: {
              CURR_LANGUAGE: 'ENGLISH',
            },
          },
        }}>
        <Scroll />
      </Provider>
    </>
  );
};

export default App;
