import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import "./ToDo.css";

function ToDoList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/users");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const apiData = await res.json();
      setData(apiData);
      setFilteredData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteData = async (id) => {
    return fetch(`http://localhost:4000/api/users/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          console.log("Failed to delete user");
          return false;
        }
        return true;
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        return false;
      });
  };

  const handleDelete = async (id) => {
    const isDeleted = await deleteData(id);
    if (isDeleted) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      setFilteredData(updatedData);
    } else {
      console.error(`Failed to delete user with id ${id}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleOpenModal = (item) => {
    setOpen(item);
  };

  const handleCloseModal = () => {
    setOpen(null);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Search content"
          value={search}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              <span onClick={() => handleOpenModal(item)}>{item.name}</span>{" "}
              <span onClick={() => handleDelete(item.id)}>
                <MdDelete />
              </span>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="popup">
          <div className="childPopup">
            <h2>Edit User</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedData = data.map((item) =>
                  item.id === open.id ? open : item
                );
                setData(updatedData);
                setFilteredData(updatedData);
                handleCloseModal();
              }}
            >
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={open.name}
                    onChange={(e) =>
                      setOpen((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                    type="email"
                    value={open.email}
                    onChange={(e) =>
                      setOpen((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </label>
              </div>
              <div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
