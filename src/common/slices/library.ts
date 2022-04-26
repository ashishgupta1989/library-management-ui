import { createSlice, PayloadAction } from '@reduxjs/toolkit'

function createBooksData(
    id: number,
    name: string,
    author: string,
    publisher: string,
    genre: string,
    count: number,
    ) {
    return { name, author, publisher, genre, count };
  }
  
const books = [
  createBooksData(1,'Death of city','Amiritha pritham','Amiritha pritham','Ficton',10),
  createBooksData(2,'A revenue stamp','Amiritha pritham','Amiritha pritham','science ficttion',10),
  createBooksData(3,'A passage to india','E.M foster','E.M foster','fantacy',15),
  createBooksData(4,'A suitable boy','vikram seth','vikram seth','novel',20),
  createBooksData(5,'A tales of two cites','Charles darwin','Charles darwin','Drama',5),
  createBooksData(6,'oliver twist','Charles darwin','Charles darwin','Ficton',2),
  createBooksData(7,'A week with gandhi','Louis Fisher','Louis Fisher','Poetry',8)
  ];

  function createReadersData(
    id: number,
    name: string,
    phone: string,
    address: string,
    email: string,
  ) {
    return { name, phone, address, email };
  }
  
  const readers = [
    createReadersData(1,'Ashish Gupta','9765452226','Kalyani Nagar, Pune','ashish@epam.com'),
    createReadersData(2,'Abhishek Anand','1231231233','Whitefield, Bangaloreune','abhishek@epam.com'),
    createReadersData(3,'Suryamani Koutilya','9876987687','ABC, Chennai','curya@epam.com'),
  ];
export interface LibraryState {
    books: any,
    readers: any
}

const initialState: LibraryState = {
    books,
    readers
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<any>) => {
        const reader = {
            id: Math.floor((Math.random() * 1000) + 1),
            ...action.payload
        }
        state.readers.unshift(reader)
    },
  },
})

// Action creators are generated for each case reducer function
export const {
    createUser
} = librarySlice.actions

export default librarySlice.reducer