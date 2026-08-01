from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine, SessionLocal
from models import User
from schemas import UserCreate

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Create User
@app.post("/users")
def create_user(user: UserCreate):
    db = SessionLocal()

    new_user = User(
        username=user.username,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    db.close()

    return {
        "message": "User Inserted Successfully",
        "user": new_user
    }


# Get All Users
@app.get("/users")
def get_users():
    db = SessionLocal()

    users = db.query(User).all()

    db.close()

    return users


# Update User
@app.put("/users/{user_id}")
def update_user(user_id: int, user: UserCreate):
    db = SessionLocal()

    existing_user = db.query(User).filter(User.id == user_id).first()

    if existing_user is None:
        db.close()
        raise HTTPException(status_code=404, detail="User Not Found")

    existing_user.username = user.username
    existing_user.password = user.password

    db.commit()
    db.refresh(existing_user)
    db.close()

    return {
        "message": "User Updated Successfully",
        "user": existing_user
    }


# Delete User
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    db = SessionLocal()

    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        db.close()
        raise HTTPException(status_code=404, detail="User Not Found")

    db.delete(user)
    db.commit()
    db.close()

    return {"message": "User Deleted Successfully"}