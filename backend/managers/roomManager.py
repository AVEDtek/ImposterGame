import string
import random
from backend.models import game

class RoomManager:
    def __init__(self):
        self.rooms = {}  # key = roomId, value = Game

    def generate_random_id(self, length=6):
        characters = string.ascii_uppercase + string.digits

        while True:
            room_id = ''.join(random.choice(characters) for _ in range(length))
            if room_id not in self.rooms:
                return room_id

    def create_room(self):
        room_id = self.generate_random_id()
        self.rooms[room_id] = game.Game()
        return room_id

    def get_room(self, room_id):
        return self.rooms[room_id]
    
    def room_exists(self, room_id):
        return room_id in self.rooms