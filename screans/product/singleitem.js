import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ProductContext } from "./productcontext";
import BASE_URL from "../../api";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Button, Paper, Typography } from '@material-ui/core';
import StarRateIcon from "@material-ui/icons/StarRate";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { getAllproducts } from "./productfunc";

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});
const Singleitem = ({ route }) => {
    const { state, dispatch } = useContext(ProductContext);
    useEffect(() => {
        getAllproducts(dispatch);
    }, []);
    const { itemId } = route.params;
    const product = state.products.find((p) => p._id.toString() === itemId.toString())
    console.log(product);
    const pics = product && product.photo && product.photo.map((pic, idx) => ({
        label: `Image ${idx + 1}`,
        imgPath: `${BASE_URL}${pic.img}`
    }))
    console.log(pics);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = pics && pics.length;
    const classes = useStyles();
    const theme = useTheme();


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <ScrollView >
            <View style={{ flex: 1 }}>
                <Image
                    source={{
                        uri: pics && pics[activeStep].imgPath
                    }}
                    style={{ marginHorizontal: 20, width: "90%", height: 400, marginTop: 10 }}
                />
            </View>
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                style={{ width: "100%" }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps}>
                        Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
            <Text style={{ fontSize: "20px", marginHorizontal: "20px" }}>{product && product.name}</Text>
            <View style={{
                marginHorizontal: "20px",
                marginVertical: "10px",
                width: "50px",
                padding: "2px 7px",
                borderRadius: "14px",
                fontSize: "16px",
                backgroundColor: "#26a541",
                verticalAlign: "baseline",
                lineHeight: "normal",
                display: "inline-block",
                color: "#fff",
                fontWeight: "900",
            }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <Text style={{ fontWeight: "bold", marginHorizontal: 5, marginVertical: 3, color: "white" }}>{product && product.ratings}</Text>
                    <StarRateIcon
                        fontSize="small"
                        style={{ marginTop: "2px", marginRight: "5px" }}
                    />
                    {/* <Text>Ratings</Text> */}
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", bottom: 0 }}>
                <TouchableOpacity
                    //   onPress={() => {
                    //     setModalVisible(true)
                    //   }}
                    style={{ width: "50%", height: "50px", backgroundColor: "#fbc02d" }}
                >
                    <Text style={{ margin: "auto", fontWeight: "bold", color: "black" }}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: "50%", height: "50px", backgroundColor: "#f44336" }}
                >
                    <Text style={{ margin: "auto", fontWeight: "bold", color: "white" }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default Singleitem

const styles = StyleSheet.create({})
