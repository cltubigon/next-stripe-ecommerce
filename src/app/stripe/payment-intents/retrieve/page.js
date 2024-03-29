"use client"
import ZustandLoader from "@/app/CustomLoader"
import utilityStore from "@/config/store"
import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useStore } from "zustand"

const RetrievePaymentIntent = () => {
  const { isLoaded, setLoaded } = useStore(utilityStore)
  const handleButtonClick = async () => {
    // setLoaded(true)
    const data = {
      id: "pi_3Ol3X3E714z6NjCo1YsURAjk",
    }

    try {
      const response = await axios.get(
        "http://localhost:3000/stripe/payment-intents/retrieve/api",
        {
          data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response) {
        // setLoaded(false)
        console.log({ response })
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    }
  }

  return (
    <div>
      <Button
        w={"100%"}
        colorScheme={"orange"}
        px={4}
        onClick={handleButtonClick}
      >
        RetrievePaymentIntent
      </Button>
      {isLoaded && <ZustandLoader />}
    </div>
  )
}

export default RetrievePaymentIntent
