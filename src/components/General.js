export const General = ({ handleStateChange }) => {
  return (
    <section>
      <h1>General information</h1>
      <br />
      <form>
        <label htmlFor="name">Full name:</label>

        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            handleStateChange(e, "name");
          }}
        ></input>

        <label htmlFor="name">Title:</label>

        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            handleStateChange(e, "title");
          }}
        ></input>

        <label htmlFor="skills">Skills:</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="separate on comma"
          onChange={(e) => {
            handleStateChange(e, "skills");
          }}
        ></input>

        <label htmlFor="email">Email:</label>

        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            handleStateChange(e, "email");
          }}
          required
        ></input>

        <label htmlFor="number">Phone number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          onChange={(e) => {
            handleStateChange(e, "number");
          }}
          required
        ></input>

        <label htmlFor="website">GitHub:</label>
        <input
          type="text"
          id="website"
          name="website"
          onChange={(e) => {
            handleStateChange(e, "website");
          }}
        ></input>

        <label htmlFor="bio">Bio:</label>
        <textarea
          placeholder="Write a short description about yourself"
          id="bio"
          name="bio"
          rows="5"
          cols="33"
          onChange={(e) => {
            handleStateChange(e, "bio");
          }}
        ></textarea>

        <label htmlFor="photoUpload">
          Photo:
          <input
            type="file"
            id="photoUpload"
            name="photoUpload"
            accept="image/*"
            onChange={(e) => {
              handleStateChange(e, "photo");
            }}
          ></input>
        </label>
      </form>
    </section>
  );
};
