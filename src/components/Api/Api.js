const url = "https://norma.nomoreparties.space/api/ingredients";

function Api(setIsLoaded, setItems, setError) {
  fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
}

export { Api };
