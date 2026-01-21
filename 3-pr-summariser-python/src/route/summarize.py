from fastapi import APIRouter
from pydantic import BaseModel
from src.service.summarizer import summarize_text

router = APIRouter()

class PRRequest(BaseModel):
    description: str

@router.post("/summarize")
def summarize_pr(request: PRRequest):
    summary = summarize_text(request.description)
    return {"summary": summary}
