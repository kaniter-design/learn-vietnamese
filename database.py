import datetime
from sqlalchemy import create_engine, Column, Integer, String, DateTime, CheckConstraint
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = "sqlite:///./progress.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class UserProfile(Base):
    __tablename__ = "user_profile"
    id = Column(Integer, primary_key=True, default=1)
    current_day = Column(Integer, default=1)
    streak = Column(Integer, default=0)
    last_active_date = Column(String(10), nullable=True)

class CompletedDay(Base):
    __tablename__ = "completed_days"
    day_num = Column(Integer, primary_key=True)
    completed_at = Column(DateTime, default=datetime.datetime.utcnow)

class CompletedQuest(Base):
    __tablename__ = "completed_quests"
    quest_id = Column(String(64), primary_key=True)
    completed_at = Column(DateTime, default=datetime.datetime.utcnow)

class SRSWord(Base):
    __tablename__ = "srs_words"
    word = Column(String(128), primary_key=True)
    meaning = Column(String(256), nullable=False)
    box = Column(Integer, default=1)
    next_review_date = Column(String(10), nullable=False)
    
    __table_args__ = (
        CheckConstraint('box >= 1 AND box <= 5', name='check_box_range'),
    )

class TonePracticeStat(Base):
    __tablename__ = "tone_practice_stats"
    id = Column(Integer, primary_key=True, default=1)
    total_attempts = Column(Integer, default=0)
    correct_attempts = Column(Integer, default=0)

def init_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        # Seed user profile
        user = db.query(UserProfile).filter(UserProfile.id == 1).first()
        if not user:
            user = UserProfile(id=1, current_day=1, streak=0, last_active_date=None)
            db.add(user)
        
        # Seed tone stats
        tone_stat = db.query(TonePracticeStat).filter(TonePracticeStat.id == 1).first()
        if not tone_stat:
            tone_stat = TonePracticeStat(id=1, total_attempts=0, correct_attempts=0)
            db.add(tone_stat)
            
        # Seed SRS words (starter set)
        today_str = datetime.date.today().isoformat()
        starter_words = [
            {"word": "xin chào", "meaning": "สวัสดี", "box": 1, "next_review_date": today_str},
            {"word": "cảm ơn", "meaning": "ขอบคุณ", "box": 1, "next_review_date": today_str},
            {"word": "xin lỗi", "meaning": "ขอโทษ", "box": 1, "next_review_date": today_str}
        ]
        for w_data in starter_words:
            exists = db.query(SRSWord).filter(SRSWord.word == w_data["word"]).first()
            if not exists:
                srs_w = SRSWord(**w_data)
                db.add(srs_w)
                
        db.commit()
    except Exception as e:
        print(f"Error seeding database: {e}")
        db.rollback()
    finally:
        db.close()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
