// import component
import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MultiSelect, { MultiSelectProps } from 'react-native-multiple-select';

//class classTest extends React.Component<MultiSelectProps> {}

export class MultiSelectExample extends Component {

  state = {
    selectedItems : [{}],
    //multiSelect: []
    
  };

  items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];

  multiSelect: MultiSelect | null = null;

  onSelectedItemsChange = (selectedItems:any[]) => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={this.items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <View style={styles.picker}>
          {this.multiSelect !== null? this.multiSelect.getSelectedItemsExt(selectedItems) : <></>}
        </View>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    picker: { 
        height: 45,
        width: 300,
        fontSize: 8,
    }
})