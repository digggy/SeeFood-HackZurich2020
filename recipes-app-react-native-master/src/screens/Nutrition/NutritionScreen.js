import React from 'react';
import {
    FlatList,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';


const { width: viewportWidth } = Dimensions.get('window');

export default class RecipeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTransparent: 'true',
            headerLeft: () => <BackButton
                onPress={() => {
                    navigation.goBack();
                }}
            />
        };
    };

    constructor(props) {
        super(props);

        const food = this.props.route.params.response.data[0];
        const nutrition = food.nutrition;

        this.state = {
            name: food.name,
            img: food.img,
            calcium: nutrition.calcium,
            calories: nutrition.calories,
            cholesterol: nutrition.cholesterol,
            energy: nutrition.energy_kj,
            iron: nutrition.iron,
            lactose: nutrition.lactose,
            magnesium: nutrition.magnesium,
            potassium: nutrition.potassium,
            protein: nutrition.protein,
            saturatedFat: nutrition.saturated_fat,
            sodium: nutrition.sodium,
            sugars: nutrition.sugars,
            totalCarb: nutrition.total_carb,
            totalFat: nutrition.total_fat,
            trans_fat: nutrition.trans_fat,
            vitamin_a_iu: nutrition.vitamin_a_iu,
            vitamin_a_rae: nutrition.vitamin_a_rae,
            vitamin_b12: nutrition.vitamin_b12,
            vitamin_b6: nutrition.vitamin_b6,
            vitamin_c: nutrition.vitamin_c,
            vitamin_d: nutrition.vitamin_d,
            vitamin_d_iu: nutrition.vitamin_d_iu,
            vitamin_e: nutrition.vitamin_e,
            vitamin_k: nutrition.vitamin_k,
            water: nutrition.water,
        };
    }

    renderImage = ({ item }) => (
        <TouchableHighlight>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'data:image/png;base64,' + this.state.img }} />
            </View>
        </TouchableHighlight>
    );

    renderNutrient = ({ item }) => (
        <ListItem
            bottomDivider
            topDivider
            title={item.name}
            rightTitle={item.value}
        />
    );

    render() {

        const data = [
            {
                name: 'Calcium',
                value: this.state.calcium
            },
            {
                name: 'Calories',
                value: this.state.calories
            },
            {
                name: 'Carbohydrates',
                value: this.state.totalCarb
            },
            {
                name: 'Cholesterol',
                value: this.state.cholesterol
            },
            {
                name: 'Energy (kJ)',
                value: this.state.energy
            },
            {
                name: 'Iron',
                value: this.state.iron
            },
            {
                name: 'Lactose',
                value: this.state.lactose
            },
            {
                name: 'Magnesium',
                value: this.state.magnesium
            },
            {
                name: 'Potassium',
                value: this.state.potassium
            },
            {
                name: 'Protein',
                value: this.state.protein
            },
            {
                name: 'Saturated fat',
                value: this.state.saturatedFat
            },
            {
                name: 'Sodium',
                value: this.state.sodium
            },
            {
                name: 'Sugars',
                value: this.state.sugars
            },
            {
                name: 'Total fat',
                value: this.state.totalFat
            },
            {
                name: 'Trans fat',
                value: this.state.trans_fat
            },
            {
                name: 'Vitamin A (IU)',
                value: this.state.vitamin_a_iu
            },
            {
                name: 'Vitamin A (RAE)',
                value: this.state.vitamin_a_rae
            },
            {
                name: 'Vitamin B12',
                value: this.state.vitamin_b12
            },
            {
                name: 'Vitamin B6',
                value: this.state.vitamin_b6
            },
            {
                name: 'Vitamin C',
                value: this.state.vitamin_c
            },
            {
                name: 'Vitamin D',
                value: this.state.vitamin_d
            },
            {
                name: 'Vitamin D (IU)',
                value: this.state.vitamin_d_iu
            },
            {
                name: 'Vitamin E',
                value: this.state.vitamin_e
            },
            {
                name: 'Vitamin K',
                value: this.state.vitamin_k
            },
            {
                name: 'Water',
                value: this.state.water
            }
        ]

        const filteredData = data.filter(nutrient => {
            return nutrient.value === null || nutrient.value === 0 ? false : true
        });

        console.log(data);

        return (
            <ScrollView style={styles.container}>
                <View>
                    <Image style={styles.image} source={{ uri: 'data:image/png;base64,' + this.state.img }} />
                </View>
                    <View style={styles.infoRecipeContainer}>
                        <Text style={styles.infoRecipeName}>{this.state.name}</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.category}>NUTRIENTS</Text>
                        </View>
                    </View>
                    <FlatList
                        data={filteredData}
                        renderItem={this.renderNutrient}
                    />
                </ScrollView>

        );
    }
}