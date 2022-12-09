import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "You need to select at least one image."),
});

const categories = [
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "English",
    value: 1,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Math",
    value: 2,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Biology",
    value: 3,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Physics",
    value: 4,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Chemistry",
    value: 5,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "History",
    value: 6,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Technology",
    value: 7,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Foreign Language",
    value: 8,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Fiction",
    value: 9,
  },
  {
    backgroundColor: "#CFB997",
    icon: "book-open-variant",
    label: "Others",
    value: 10,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
