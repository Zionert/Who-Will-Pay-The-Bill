import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { MainLogo } from '../utils/tools';
import { Input, Button, ListItem, Text } from 'react-native-elements'

import { MyContext } from '../context'

const StageOne = () => {
    const context = useContext(MyContext)

    const renderPlayers = () => {
        return context.state.players.map((item, id) => (
            <ListItem
                key={id}
                bottomDivider
                style={{width:'100%'}}
                onLongPress={() => context.removePlayerHandler(id)}
            >   
                <ListItem.Chevron/>
                <ListItem.Content>
                    <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ))
    }

    return (
        <>
        <Formik
            initialValues={{player: ''}}
            validationSchema={Yup.object({
                player: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .max(15, 'Must be less than 15 characters')
                .required('Sorry the name is required')
            })}
            onSubmit={(values, { resetForm }) => {
                context.addPlayerHandler(values.player)
                resetForm()  
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors}) => {
                return (
                    <>
                        <MainLogo />

                        <Input 
                            placeholder='Add names here'
                            leftIcon={{type: 'antdesign', name: 'adduser'}}
                            inputContainerStyle={{
                                marginHorizontal:50,
                                marginTop:50
                            }}
                            
                            renderErrorMessage={errors.player && touched.player}
                            errorMessage={errors.player}
                            errorStyle={{
                                marginHorizontal:50
                            }}

                            onChangeText={handleChange('player')}
                            onBlur={handleBlur('player')}
                            value={values.player}
                        />

                        <Button 
                            buttonStyle={styles.button}
                            title='Add player'
                            onPress={handleSubmit}
                        />
                    </>
                )
            }}
        </Formik>

        <View style={{padding:20, width:'100%'}}>
            {
                context.state.players && context.state.players.length > 0 ?
                    <>
                        <Text>List of players</Text>
                        {renderPlayers() }
                        <Button 
                            buttonStyle={styles.button}
                            title='Get the looser'
                            onPress={() => context.nextHandler()}
                        />
                    </>
                :null
            }
        </View>    

        </>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: '#DB3EB1',
        marginTop: 20
    }
})

export default StageOne;