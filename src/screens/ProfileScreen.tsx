import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	ActivityIndicator,
	Image,
} from "react-native";
import { useAppSelector, useAppDispatch } from "@/store/hooks/reduxHooks";
import { getUserData } from "@/store/entities/user/selectors/getUserData";
import { getIsLoading } from "@/store/entities/user/selectors/getIsLoading";
import { handleLogOut } from "@/api/logOut";
import { getUserImage } from "@/store/entities/user/selectors/getUserImage";
import { handleImagePick } from "@/api/profile";

const ProfileScreen = () => {
	const dispatch = useAppDispatch();
	const userData = useAppSelector(getUserData);
	const userImage = useAppSelector(getUserImage);
	const isLoading = useAppSelector(getIsLoading);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : (
				<>
					{userImage && (
						<Image
							alt="Profile"
							source={{
								uri: `data:image/jpeg;base64,${userImage}`,
							}}
							style={styles.image}
						/>
					)}
					<Text style={styles.title}>Profile</Text>
					<Text style={styles.label}>Name: {userData?.displayName}</Text>
					<Text style={styles.label}>Email: {userData?.email}</Text>
					<Button
						title="Pick profile image"
						onPress={() => handleImagePick(userData?.uid || "", dispatch)}
						color="#FF0000"
					/>
					<Button
						title="Log Out"
						onPress={() => handleLogOut(dispatch)}
						color="#FF0000"
					/>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	title: {
		fontSize: 24,
		marginBottom: 16,
	},
	label: {
		fontSize: 18,
		marginBottom: 8,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 16,
	},
});

export default ProfileScreen;
