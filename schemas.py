from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional

class ProgressResponse(BaseModel):
    streak: int
    current_day: int
    completed_days: List[int]
    words_learned: int
    tone_accuracy: str
    quests_completed: List[str]

class DayCompletionRequest(BaseModel):
    day_num: int

class SRSWordCreate(BaseModel):
    word: str
    meaning: str

class SRSWordResponse(BaseModel):
    word: str
    meaning: str
    box: int
    next_review_date: str

    class Config:
        from_attributes = True

class TonePracticeUpdate(BaseModel):
    is_correct: bool

class ToneStatsResponse(BaseModel):
    total_attempts: int
    correct_attempts: int
    accuracy: str

# Quest Chat Models
class SystemStateUpdate(BaseModel):
    update_error_log: Optional[str] = None
    adjust_difficulty: int = 0
    trigger_srs: bool = False

class AudioDirective(BaseModel):
    text_to_synthesize: str
    speed_rate: float = 1.0

class UIRenderDirective(BaseModel):
    keyboard_type: str
    inline_buttons: List[List[str]]

class QuestChatResponse(BaseModel):
    system_state_update: SystemStateUpdate
    feedback_layer: str
    core_content_layer: str
    audio_directive: AudioDirective
    interaction_prompt: str
    ui_render_directive: UIRenderDirective

class QuestChatRequest(BaseModel):
    quest_id: str
    user_message: str
    chat_history: Optional[List[Dict[str, str]]] = Field(default_factory=list)
    hp: int = 100
    budget: int = 100000

# Quiz Diagnostics Models
class DiagnosticRequest(BaseModel):
    correct_word: str
    incorrect_word: str

class DiagnosticResponse(BaseModel):
    explanation: str
