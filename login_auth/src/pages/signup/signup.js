import { Box } from "@chakra-ui/layout"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Text,
    Link
} from "@chakra-ui/react"

import { Link as ReactRouterLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { signupResolver } from "../../utils/validator/signupResolver"
import { auth } from "../utils/validator/firebase" 



const Signup = () => {

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({ resolver: signupResolver });


    const onSubmit = ({email, password}) => {
        console.log(email, password);
     auth.createUserWithEmailAndPassword(email,password)
    }


    return (
        <Box width="100%" minH="100vh" background="gray.200" d="flex" alignItems="center" justifyContent="center">
            <Box width="30%" shadow="lg" background="white" p={12} rounded={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl marginTop="2" isInvalid={errors.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" name="email" {...register("email")} />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.password}>
                        <FormLabel htmlFor="password">password</FormLabel>
                        <Input type="password" placeholder="Enter your password" name="password"  {...register("password")} />
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.repeatpassword}>
                        <FormLabel htmlFor="repeatpassword">repeatpassword</FormLabel>
                        <Input type="password" placeholder="Enter your repeatpassword" name="repeatpassword"  {...register("repeatpassword")} />
                        <FormErrorMessage>{errors.repeatpassword && errors.repeatpassword.message}</FormErrorMessage>
                    </FormControl>
                    <Button isLoading={isSubmitting} marginTop={4} colorScheme="messenger" type="submit" width="100%">
                        Sign up
                    </Button>
                    <Text>
                        <Link as={ReactRouterLink} color="green.500" to="/login">
                            Already registered?
                        </Link>
                    </Text>
                </form>
            </Box>
        </Box>

    );
};
export default Signup