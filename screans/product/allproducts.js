import React,{useContext} from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import { CategoryContext } from "../category/categorycontext";

const Allproducts = ({route, navigation}) => {
  const { catstate, catdispatch } = useContext(CategoryContext);
  const [expanded, setExpanded] = React.useState(true);
  
  const handlePress = () => setExpanded(!expanded)
  return (
    <View style={{flex:1, flexDirection:"column"}}>
     <List.Section title="Choose your products">
           <List.Accordion
             title="Controlled Accordion"
             left={props => <List.Icon {...props} icon="folder" />}
             expanded={expanded}
             onPress={handlePress}>
             {catstate.categories.map((cat)=> cat.parentId && cat.parentId._id.toString() === route.params.subCatid.toString() && 
             <List.Item title={cat.name} />
             )}
           </List.Accordion>
         </List.Section>
    </View>
  );
};

export default Allproducts;
