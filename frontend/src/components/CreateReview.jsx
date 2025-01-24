import { useFormik } from "formik";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as Yup from "yup";

import { useCreateReview } from "../hooks/useCreateReview";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  input: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    color: "#d73a4a",
    marginBottom: 10,
  },
});

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required("Repository owner name is required"),
  repositoryName: Yup.string().required("Repository name is required"),
  rating: Yup.number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must not exceed 100"),
  review: Yup.string(),
});

const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: "",
      review: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Repository owner name"
        onChangeText={formik.handleChange("ownerName")}
        onBlur={formik.handleBlur("ownerName")}
        value={formik.values.ownerName}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={styles.errorText}>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Repository name"
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
        value={formik.values.repositoryName}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Rating between 0 and 100"
        keyboardType="numeric"
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
        value={formik.values.rating}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.errorText}>{formik.errors.rating}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Review"
        multiline
        onChangeText={formik.handleChange("review")}
        onBlur={formik.handleBlur("review")}
        value={formik.values.review}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    console.log("resetForm exists:", typeof resetForm === "function");
    const { ownerName, repositoryName, rating, review } = values;

    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text: review,
      });
      const repositoryId = data.createReview.repositoryId;
      navigate(`/repository/${repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return <CreateReviewForm onSubmit={onSubmit} />;
};
export default CreateReview;
