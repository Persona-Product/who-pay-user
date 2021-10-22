# Expo メモ

## ネイティブコンポーネント

### View(div - non-scroll)

- 画面の表示領域（100vh,100vw?）を定義する
- コンポーネントをラップする
- レイアウトを組む感じで使用する

### Text(p)

- テキストを表示させるときにラップする

### TouchableOpacity(active - opacity(1~0.0))

> https://reactnative.dev/docs/touchableopacity

- イベント発生時に透明度を下げてくれる

```
<TouchableOpacity
  activeOpacity={0.6} // 透過度
  style={styles.button}　// style
  onPress={this.onPress} // イベント
>
```

### Image（img）

```
<Image
  source={{
    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
  }}
  width: 64,
  height: 64
  style={{ width: 200, height: 200 }}
/>
```

### TextInput(input type-text)

### ScrollView(div - scroll)

- スクロール可能な表示領域(minHeight: 100vh?,width: 100vw,overFlow: auto?)を定義できる

### Button（button

- イベントハンドラ(react -> react-native)
  - onClick -> onPress

### FlatList(li)

- ただのリスト
- アイテムの数が時間の経過とともに変化する可能性があるデータの長いリストに適している
- data と renderItem が必須 props
- data の中に配列
- renderItem の中にリスト化するコンポーネントを入れる（map()みたいな感じで書くことができる）

```
<FlatList
  data={[
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
/>
```

### SectionList(li)

```
<SectionList
    sections={[
      {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
      {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ]}
    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    keyExtractor={(item, index) => index}
  />
```

- リストをグループ化することができる

### StyleSheet

- css を css.module 的な感じで書くことができる
- ios, android ごとにスタイルを分けることができる
- デバイスのバージョンごとにスタイルも変えれる

```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});
```

- デバイスごとのコンポーネントファイルを作成することができる

  - BigButton.ios.js
  - BigButton.android.js

ファイルを読み込むときはこうやる

```
import BigButton from './BigButton';
```
