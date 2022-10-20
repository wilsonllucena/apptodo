import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/Feather';

import { styles } from "./styles";
type Props = {
    name: string;
    onRemove: () => void;
    onCountDone: (name: string) => void;
}
export default function Todo({name, onRemove, onCountDone}: Props) {
    return (
        <View style={styles.container}>
            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <BouncyCheckbox
                    size={20}
                    fillColor="#4EA8DE"
                    unfillColor="#262626"
                    text={name}
                    iconStyle={{ borderColor: "#5E60CE"}}
                    innerIconStyle={{ borderWidth: 1 }}
                    textStyle={styles.textCheckbox}
                    onPress={()=> {onCountDone(name) }}
                />
                <TouchableOpacity onPress={onRemove} >
                    <Icon name="trash-2" style={styles.button}  />
                </TouchableOpacity>
            </View>
         
        </View>
    )
}