from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
def get_users():
    return "User Info"

@router.post("/users/post")
def post_users():
    return "Created user" 

@router.put("/users/{id}")
def put_users(id):
    return "Updated User" + id

@router.patch("/users/{id}")
def patch_users(id):
    return "Patched user" + id

@router.delete("/users/{id}")
def delete_users(id):
    return "Deleted user" + id