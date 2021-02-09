import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProductContext } from "./productcontext";
import BASE_URL from "../../api";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Button, Paper, Typography } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});
const Singleitem = ({ route }) => {
    const { itemId } = route.params;
    const { state, dispatch } = useContext(ProductContext);
    const product = state.products.find((p) => p._id.toString() === itemId.toString())
    console.log(product);
    const pics = product.photo && product.photo.map((pic, idx) => ({
        label: `Image ${idx + 1}`,
        imgPath: `${BASE_URL}${pic.img}`
    }))
    console.log(pics);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = pics.length;
    const classes = useStyles();
    const theme = useTheme();


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <View>
            <View style={{ flex: 1 }}>
                <Image
                    source={{
                        uri: pics[activeStep].imgPath
                    }}
                    style={{ marginHorizontal: 20, width: "90%", height: 400, marginTop: 10 }}
                />
            </View>
            <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
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
        </View>
    )
}

export default Singleitem

const styles = StyleSheet.create({})
