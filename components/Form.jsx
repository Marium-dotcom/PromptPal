import React from 'react';

function MyComponent({ handleForm, submit, handleInput }) {
  return (
    <>
      <h2 className="text-2xl text-blue-600 text-center font-bold mb-4">Create a Prompt</h2>
      <form onSubmit={handleForm} className="mx-auto max-w-lg">
        <textarea
          type="text"
          className="w-full px-3 py-2 mt-3 text-black bg-white rounded-lg border-gray-300 shadow-sm focus:border-blue-500 border focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm"
          name="prompt"
          value={submit.prompt}
          onChange={(e) => handleInput(e)}
          cols="30"
          rows="10"
          placeholder="Enter prompt"
          required
        ></textarea>
        <input
          type="text"
          className="w-full px-3 py-2 mt-3 text-black bg-white rounded-lg border-gray-300 shadow-sm focus:border-blue-500 border focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm"
          name="tag"
          value={submit.tag}
          onChange={(e) => handleInput(e)}
          placeholder="Enter tag"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}

MyComponent.displayName = 'MyComponent';

export default MyComponent;