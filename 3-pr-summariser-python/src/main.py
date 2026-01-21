from fastapi import FastAPI
from src.route.summarize import router

src = FastAPI(title="PR Summarizer Service")

src.include_router(router)
