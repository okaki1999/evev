class EventsController < ApplicationController
    def index
        events = Event.all
        render json: events
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    def create
        Event.create(event_params)
        head :created
    end
    
    def destroy
        @event = Event.find(params[:id])
        @event.destroy
    end

    private
    
    def event_params
        params.require(:event).permit(:title, :contents,:start_at,:end_at)
    end
end
